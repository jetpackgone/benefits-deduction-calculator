import { DependentsField } from "./DependentsField";

describe('DependentsField', () => {
  describe('handleDependentAdded', () => {
    test('calls update handler with new dependent added', () => {
      const onDependentNamesUpdatedMock = jest.fn(names => {});
      const dependentsField = new DependentsField({
        dependents: [],
        onDependentNamesUpdated: onDependentNamesUpdatedMock
      });
      dependentsField.handleDependentAdded({ id: 1, name: 'Bob'})
      expect(onDependentNamesUpdatedMock).toHaveBeenCalledWith([{ id: 1, name: 'Bob'}]);
    });
  });

  describe('handleDependentRemoved', () => {
    test('calls update handler with dependent removed', () => {
      const onDependentNamesUpdatedMock = jest.fn(names => {});
      const dependentsField = new DependentsField({
        dependents: [{ id: 1, name: 'Bob'}],
        onDependentNamesUpdated: onDependentNamesUpdatedMock
      });
      dependentsField.handleDependentRemoved(1)
      expect(onDependentNamesUpdatedMock).toHaveBeenCalledWith([]);
    });
  });
});
