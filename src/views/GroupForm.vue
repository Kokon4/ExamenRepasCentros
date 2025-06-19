<template>
  <div class="row">
    <Form @submit="onSubmit" :validation-schema="schema">
      <fieldset>
        <legend>Editar o Añadir grupo</legend>

        <div class="form-group">
          <label>ID:</label>
          <Field name="id" type="text" class="form-control" :disabled="true" />
        </div>

        <div class="form-group">
          <label>Código:</label>
          <Field name="codi" type="text" class="form-control" />
          <ErrorMessage name="codi" class="text-danger" />
        </div>

        <div class="form-group">
          <label>Nombre:</label>
          <Field name="nom" type="text" class="form-control" />
          <ErrorMessage name="nom" class="text-danger" />
        </div>

        <div class="form-group">
          <label>Familia:</label>
          <Field name="familia" as="select" class="form-control">
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
            <Field name="grau" type="radio" value="M" class="form-check-input" id="grauM" />
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
    ...mapActions(useStore,['carregarFamilias','afegirGrup']),
    async onSubmit(values){
      try{
        await this.afegirGrup(values);
        this.$router.push('/grupos');
      } catch (error){
        alert(error);
        console.log(error)
      }
    },
    carregarFormulariEdit(){
      const grup = this.groups.find(group => group.id == this.idGroup);
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
    };
  },
  props: {
    idGroup: String
  }
}
</script>

<style scoped></style>
