import { Button, Datepicker, Select } from 'flowbite-react';
import { useFormik } from 'formik';
import moment from 'moment';
import { initialDateValue, useGlobalStore } from '../store';
import { ChangeEvent, useEffect, useState } from 'react';
import mediaSource from '../helper/media_sources.json';

const initialDisabledFields = {
  date: false,
  category: false,
  source: false,
};

const Filter = () => {
  const { filter, keyword, setFilter, resetFilter } = useGlobalStore();
  const [disabledFields, setDisabledFields] = useState(initialDisabledFields);

  const formik = useFormik({
    initialValues: filter,
    onSubmit: (values) => setFilter(values),
  });

  const submitDisabled = keyword === '' && formik.values.category === '' && formik.values.source === '';

  const handleResetFilter = () => {
    resetFilter();
    formik.resetForm();
    setDisabledFields(initialDisabledFields);
  };

  const handleFieldChange = (e: ChangeEvent<HTMLSelectElement>, fieldName: string) => {
    formik.handleChange(e);
    formik.setFieldValue('date', initialDateValue);
    formik.setFieldValue(fieldName, '');
    const disable = e.target.value !== '';
    setDisabledFields((prev) => ({ ...prev, date: disable, [fieldName]: disable }));
  };

  useEffect(() => {
    if (keyword !== '') {
      formik.setFieldValue('category', '');
      formik.setFieldValue('source', '');
      setDisabledFields((prev) => ({ ...prev, category: true, source: true }));
    } else {
      setDisabledFields(initialDisabledFields);
    }
  }, [keyword === '']);

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
          onChange={(e) => handleFieldChange(e, 'source')}
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
          onChange={(e) => handleFieldChange(e, 'category')}
          value={formik.values.source}
          disabled={disabledFields.source}
        >
          <option value="">Select Source</option>
          {mediaSource.map((source, i) => (
            <option key={i} value={source.id}>
              {source.name}
            </option>
          ))}
        </Select>
        <Button color="light" onClick={handleResetFilter}>
          Reset
        </Button>
        <Button onClick={() => formik.handleSubmit()} disabled={submitDisabled}>
          Apply
        </Button>
      </div>
    </nav>
  );
};

export default Filter;
