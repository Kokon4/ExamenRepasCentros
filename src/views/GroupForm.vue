<template>
  <div class="row">
    <Form @submit="onSubmit" :validation-schema="schema">
      <fieldset>
        <legend> {{ idGroup ? 'Editar Grupo' : 'Nuevo Grupo' }}</legend>

        <div class="form-group">
          <label>ID:</label>
          <Field name="id" type="text" v-model="formulari.id" class="form-control" :disabled="true" />
        </div>

        <div class="form-group">
          <label>Código:</label>
          <Field name="codi" type="text" v-model="formulari.codi" class="form-control"/>
          <ErrorMessage name="codi" class="text-danger" />
        </div>

        <div class="form-group">
          <label>Nombre:</label>
          <Field name="nom" type="text" v-model="formulari.nom" class="form-control" />
          <ErrorMessage name="nom" class="text-danger" />
        </div>

        <div class="form-group">
          <label>Familia:</label>
          <Field name="familia" as="select" v-model="formulari.familia" class="form-control">
            <option value="">--- Escoge familia ---</option>
            <option v-for="familia in familias" :key="familia.id" :value="familia.id">
              {{ familia.nom }}
            </option>
          </Field>
          <ErrorMessage name="familia" class="text-danger" />
        </div>

        <div class="form-group">
          <label>Grado:</label><br />

          <div class="form-check form-check-inline">
            <Field name="grau" type="radio" value="M" v-model="formulari.grau" class="form-check-input" id="grauM" />
            <label class="form-check-label" for="grauM">Mitjà</label>
          </div>

          <div class="form-check form-check-inline">
            <Field name="grau" type="radio" value="S" class="form-check-input" id="grauS" />
            <label class="form-check-label" for="grauS">Superior</label>
          </div>

          <ErrorMessage name="grau" class="text-danger" />
        </div>

          <button type="submit" class="btn btn-default btn-primary">Guardar</button>
          <button type="reset" class="btn btn-danger">Reset</button>
      </fieldset>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { mapActions, mapState } from 'pinia';
import { useStore } from '@/stores/store';
export default {
  components:{
    Form,
    Field,
    ErrorMessage
  },
  computed: {
    ...mapState(useStore, ['groups','familias']),
  },
  methods: {
    ...mapActions(useStore,['carregarFamilias','afegirGrup','editarGrup']),
    async onSubmit(values){
      if(this.idGroup){
        await this.editarGrup(this.formulari);
        this.$router.push('/grupos');
      } else {
        await this.afegirGrup(this.formulari);
        this.$router.push('/grupos');
      }
    },
    carregarFormulariEdit(){
      const grup = this.groups.find(group => group.id == this.idGroup) || {};
      this.formulari.id = grup.id;
      this.formulari.codi = grup.codi;
      this.formulari.nom = grup.nom;
      this.formulari.familia = grup.familia;
      this.formulari.grau = grup.grau;
    }
  },
  async mounted(){
    this.carregarFamilias();
    if(this.idGroup){
      this.titol = 'Editar grupo';
      this.carregarFormulariEdit();
    }
  },
  data() {
    const schema = yup.object().shape({
      codi: yup.string().required(),
      nom: yup.string().required(),
      familia: yup.string().required(),
      grau: yup.string().required(),
    });
    return {
      schema,
      formulari: {

      }
    };
  },
  props: {
    idGroup: String
  }
}
</script>

<style scoped></style>
