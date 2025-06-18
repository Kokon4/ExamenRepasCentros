<template>
  <div class="row">
      <form novalidate>
        <fieldset>
          <legend>Editar o Añadir grupo</legend>
          <div class="form-group">
            <label>ID:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Código:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Nombre:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Familia:</label>
            <select class="form-control">
              <option>--- Escoge familia ---</option>
            <!-- El siguiente OPTION debes completarlo y repetirlo para cada familia -->
            <option>Familia 1</option>
            </select>
          </div>
          <div class="form-group">
            <label>Grado:</label>
            <input type="text" class="form-control" />
          </div>

          <button type="submit" class="btn btn-default btn-primary">Guardar</button>
          <button type="reset" class="btn btn-danger">Reset</button>
        </fieldset>
      </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
