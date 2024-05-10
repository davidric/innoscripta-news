import { Button, Datepicker, Select } from 'flowbite-react';
import { useFormik } from 'formik';
import moment from 'moment';
import { initialDateValue, useGlobalStore } from '../store';
import { ChangeEvent, useEffect, useState } from 'react';

const initialDisabledFields = {
  date: false,
  category: false,
  source: true,
};

const Filter = () => {
  const { filter, keyword, setFilter, resetFilter } = useGlobalStore();
  const [disabledFields, setDisabledFields] = useState(initialDisabledFields);

  const formik = useFormik({
    initialValues: filter,
    onSubmit: (values) => setFilter(values),
  });

  const handleResetFilter = () => {
    resetFilter();
    formik.resetForm();
    setDisabledFields(initialDisabledFields);
  };

  useEffect(() => {
    if (keyword !== '') {
      formik.setFieldValue('category', '');
      setDisabledFields((prev) => ({ ...prev, category: true }));
    } else {
      setDisabledFields(initialDisabledFields);
    }
  }, [keyword === '']);

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    formik.handleChange(e);
    formik.setFieldValue('date', initialDateValue);
    setDisabledFields((prev) => ({ ...prev, date: e.target.value !== '' }));
  };

  return (
    <nav className="component-filter">
      <div className="filter">
        <Datepicker
          minDate={new Date(moment().add(-30, 'days').format('YYYY-MM-DD'))}
          maxDate={new Date(moment().add(-1, 'days').format('YYYY-MM-DD'))}
          name="date"
          onSelectedDateChanged={(value) => formik.setFieldValue('date', moment(value).format('YYYY-MM-DD'))}
          value={formik.values.date}
          disabled={disabledFields.date}
        />
        <Select
          name="category"
          onChange={handleChangeCategory}
          value={formik.values.category}
          disabled={disabledFields.category}
        >
          <option value="">Categories</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </Select>
        <Select
          name="source"
          onChange={formik.handleChange}
          value={formik.values.source}
          disabled={disabledFields.source}
        >
          <option>Select Source</option>
          <option>Inews</option>
          <option>BBC</option>
          <option>News Creation</option>
        </Select>
        <Button color="light" onClick={handleResetFilter}>
          Reset
        </Button>
        <Button onClick={() => formik.handleSubmit()} disabled={keyword === '' && formik.values.category === ''}>
          Apply
        </Button>
      </div>
    </nav>
  );
};

export default Filter;
