import { Button, Datepicker, Select } from 'flowbite-react';
import { useFormik } from 'formik';
import moment from 'moment';
import { useGlobalStore } from '../store';

const Filter = () => {
  const { filter, keyword, setFilter, resetFilter } = useGlobalStore();
  const formik = useFormik({
    initialValues: filter,
    onSubmit: (values) => setFilter(values),
  });

  const handleResetFilter = () => {
    resetFilter();
    formik.resetForm();
  };

  return (
    <nav className="component-filter">
      <div className="filter">
        <Datepicker
          maxDate={new Date(moment().add(-1, 'days').format('YYYY-MM-DD'))}
          name="date"
          onSelectedDateChanged={(value) => formik.setFieldValue('date', moment(value).format('YYYY-MM-DD'))}
          value={formik.values.date}
        />
        <Select name="category" onChange={formik.handleChange} value={formik.values.category} disabled>
          <option>Categories</option>
          <option>Style</option>
          <option>Health</option>
          <option>Political</option>
        </Select>
        <Select name="source" onChange={formik.handleChange} value={formik.values.source} disabled>
          <option>Select Source</option>
          <option>Inews</option>
          <option>BBC</option>
          <option>News Creation</option>
        </Select>
        <Button color="light" onClick={handleResetFilter}>
          Reset
        </Button>
        <Button onClick={() => formik.handleSubmit()} disabled={keyword === ''}>
          Apply
        </Button>
      </div>
    </nav>
  );
};

export default Filter;
