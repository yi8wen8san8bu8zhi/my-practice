<template>
  <div>
    <a-button @click="add">新增</a-button>
    <a-button @click="dels">删除</a-button>
    <a-table
      :columns="columns"
      :data-source="data"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
    >
      <template slot="tags" slot-scope="scoped">
        <a-button @click="del(scoped.name)">删除</a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: '删除',
          scopedSlots: { customRender: 'tags' },
        },
      ],
      data: [],
      num: 0,
      selectedRowKeys: [],
    };
  },
  methods: {
    add() {
      let data = {
        name: this.num++,
      };
      this.data.push(data);
    },
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
    // 单个删除
    del(name) {
      const dataSource = [...this.data];
      this.data = dataSource.filter((item) => item.name !== name);
    },
    // 批量删除
    dels() {
      let arr1 = this.selectedRowKeys.sort();
      arr1.forEach((i) => {
        if (i === 0) {
          this.data.splice(i, 1);
        } else {
          this.data.splice(i - this.selectedRowKeys.indexOf(i), 1);
        }
      });
      this.selectedRowKeys = [];
    },
  },
};
</script>

<style></style>
