import { DependentsField } from "./DependentsField";

describe('DependentsField', () => {
  describe('handleDependentAdded', () => {
    test('calls update handler with new dependent added', () => {
      const onDependentNamesUpdatedMock = jest.fn(names => {});
      const dependentsField = new DependentsField({
        names: [],
        onDependentNamesUpdated: onDependentNamesUpdatedMock
      });
      dependentsField.handleDependentAdded('Bob')
      expect(onDependentNamesUpdatedMock).toHaveBeenCalledWith(['Bob']);
    });
  });

  describe('handleDependentRemoved', () => {
    test('calls update handler with dependent removed', () => {
      const onDependentNamesUpdatedMock = jest.fn(names => {});
      const dependentsField = new DependentsField({
        names: ['Bob'],
        onDependentNamesUpdated: onDependentNamesUpdatedMock
      });
      dependentsField.handleDependentRemoved('Bob')
      expect(onDependentNamesUpdatedMock).toHaveBeenCalledWith([]);
    });
  });
});
