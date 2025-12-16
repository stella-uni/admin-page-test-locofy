import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../../components/search-bar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light-gray',
      values: [
        { name: 'light-gray', value: '#f5f5f5' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    docs: {
      description: {
        component: `
통합 검색 기능을 제공하는 컴포넌트입니다.

### 주요 기능

#### 1️⃣ **검색 입력**
- 클릭 또는 포커스 시 드롭다운 메뉴가 자동으로 나타납니다
- 실시간으로 검색어를 입력하면 \`onSearch\` 콜백이 호출됩니다

#### 2️⃣ **Recently Open (최근 열림)**
- 최근에 조회한 항목들이 표시됩니다 (예: tesla, AP900027)
- 검색어를 입력하면 이 섹션은 숨겨집니다

#### 3️⃣ **Today Appointment (오늘의 예약)**
- 오늘 예정된 예약 목록을 보여줍니다
- 각 예약은 고객명, 차량, 작업 내용이 포함됩니다
- 예: "John D. (GV80) - Engine Oil Change"

#### 4️⃣ **Today RO (오늘의 수리 오더)**
- 오늘의 RO(Repair Order) 목록을 표시합니다
- 각 항목은 차량 번호, 작업 내용, 날짜를 포함합니다
- 우측에는 편집, 설정, 결제 아이콘 버튼이 있습니다

#### 5️⃣ **추가 기능**
- 🎤 **음성 검색**: 우측 마이크 아이콘 클릭
- 📅 **캘린더**: 날짜 필터 기능 (캘린더 아이콘)
- 🔎 **검색 아이콘**: 좌측에 표시되어 검색 기능을 직관적으로 안내

### 인터랙션
- 드롭다운 내부 클릭 시 닫히지 않음 (200ms 지연 후 닫힘)
- 호버 시 각 항목의 배경색이 변경됩니다
- 스크롤 가능한 드롭다운 (최대 높이 346px)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onSearch: {
      description: '검색어 변경 시 호출되는 콜백 함수',
      action: 'searched',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

// 기본 (Playground)
export const Default: Story = {
  render: args => (
    <div style={{ minHeight: '500px', padding: '20px' }}>
      <SearchBar {...args} />
    </div>
  ),
  args: {},
};
