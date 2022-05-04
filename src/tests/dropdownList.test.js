import { render } from '@testing-library/react';
import { DropdownList } from 'components';

const projectsName = ['Project 1', 'Project 2', 'Project 3'];

describe('<DropdownList />', () => {
  test('tests correct number of options', () => {
    const { container } = render(
      <DropdownList
        value={projectsName[0]}
        list={projectsName}
        onChangeValue={() => { }}
        defaultValue='All projects'
        name='projects'
      />
    );
    const options = container.querySelectorAll('option');
    expect(options.length).toBe(projectsName.length + 1);
  });
});
