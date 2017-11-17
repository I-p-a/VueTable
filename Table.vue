<template>
  <v-app id="inspire">
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>
          <v-btn fab dark small color="primary"
            @click='removeItem(props.index)'>
            <v-icon dark>remove</v-icon>
          </v-btn>
          <v-edit-dialog lazy>
            <p style='min-width: 300px;'>{{ props.item.name }}</p>
            <v-text-field
                  slot="input"
                  label="Edit"
                  v-model="props.item.name"
                  single-line
                  counter
                ></v-text-field>
          </v-edit-dialog>

        </td>
        <td class="text-xs-right">
          <v-edit-dialog lazy>
            <p style='min-width: 300px;'>{{ props.item.count }}</p>
            <v-text-field
                  slot="input"
                  label="Edit"
                  v-model="props.item.count"
                  single-line
                  counter
                ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog lazy>
            <p style='min-width: 300px;'>{{ props.item.price }}</p>
            <v-text-field
                  slot="input"
                  label="Edit"
                  v-model="props.item.price"
                  single-line
                  counter
                ></v-text-field>
          </v-edit-dialog>
        </td>
      </template>
      <template slot="footer">
        <td colspan="100%">
          <strong>Итог: {{ Price }}</strong>
        </td>
      </template>
    </v-data-table>

    <v-container
          fluid
          style="max-width: 400px; margin: auto;"
          grid-list-lg
    >
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div class="headline">Unlimited music now</div>
            <div>

              <v-text-field
                label="Name"
                v-model='newItem.name'
              ></v-text-field>
              <v-text-field
                label="Count"
                type="number"
                v-model='newItem.count'
              ></v-text-field>
              <v-text-field
                label="Price"
                type="number"
                v-model='newItem.price'
              ></v-text-field>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark @click='submit'>Submit</v-btn>
          </v-card-actions>
        </v-card>
    </v-container>

  </v-app>
</template>

<script>
  export default {
    computed : {
      Price () {
        let price = 0
        this.items.forEach(item => {
          price += item.price * item.count
        })
        return price
      }
    },
    methods: {
      removeItem(index) {
        this.items.splice(index, 1)
      },
      submit() {
        this.items.push(this.newItem)
        this.newItem = {}
      }
    },
    data () {
      return {
        newItem: {},
        headers: [
          {
            text: 'Наименование',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Количество', sortable: false, value: 'count' },
          { text: 'Цена',       sortable: false, value: 'price' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            count: 159,
            price: 6.0
          },
          {
            name: 'Ice cream sandwich',
            count: 237,
            price: 9.0
          },
          {
            name: 'Eclair',
            count: 262,
            price: 16.0
          },
          {
            name: 'Cupcake',
            count: 305,
            price: 3.7
          }
        ]
      }
    }
  }
</script>
