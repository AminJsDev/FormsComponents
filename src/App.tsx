import { useState } from 'react';
import { Container, Box, Typography, Card, CardContent, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GridView from './components/GridView';
import TextInput from './components/TextInput';
import NumberInput from './components/NumberInput';
import PhoneInputValidated from './components/PhoneInputValidated';

interface TableRow {
  name: string;
  phone: string;
  date: string;
  status: string;
  editIcon: string;
}

interface Transaction {
  type: string;
  weight: string;
  amount: number;
  date: string;
  statusIcon: string;
}

function App() {
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const tableData: TableRow[] = [
    { name: 'علی رضایی', phone: '09121234567', date: '1404/08/25', status: 'فعال', editIcon: '✏️' },
    { name: 'مهدی حسینی', phone: '09129876543', date: '1404/08/26', status: 'غیرفعال', editIcon: '✏️' },
    { name: 'سارا محمدی', phone: '09125554411', date: '1404/08/28', status: 'فعال', editIcon: '✏️' },
  ];

  const transactions: Transaction[] = [
    { type: 'فروش', weight: '2 گرم', amount: 25000, date: '1404/08/30', statusIcon: '❌' },
    { type: 'خرید', weight: '2 گرم', amount: 25000, date: '1404/08/30', statusIcon: '✔️' },
    { type: 'فروش', weight: '2 گرم', amount: 25000, date: '1404/08/30', statusIcon: '⏱️' },
  ];

  const getStatusIcon = (icon: string) => {
    if (icon === '✔️') return <CheckCircleIcon sx={{ color: '#4caf50' }} />;
    if (icon === '❌') return <CancelIcon sx={{ color: '#f44336' }} />;
    if (icon === '⏱️') return <AccessTimeIcon sx={{ color: '#ff9800' }} />;
    return null;
  };

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        px: { xs: 1.5, sm: 2, md: 3 },
        mx: 'auto'
      }}
    >
      <Box sx={{ minHeight: '100vh', py: { xs: 1.5, sm: 2, md: 3 } }}>


        <Box sx={{ mb: { xs: 3, sm: 3.5, md: 4 } }}>
          <Typography
            variant="h5"
            sx={{
              mb: { xs: 1.5, sm: 2, md: 2.5 },
              fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' }
            }}
          >
            ورودی‌ها
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            maxWidth: '100%'
          }}>
            <TextInput
              label="نام"
              value={textValue}
              onChange={setTextValue}
              placeholder="نام خود را وارد کنید"
            />
            <NumberInput
              label="مبلغ"
              value={numberValue}
              onChange={setNumberValue}
              placeholder="مبلغ را وارد کنید"
            />
            <PhoneInputValidated
              label="شماره تلفن"
              value={phoneValue}
              onChange={setPhoneValue}
              placeholder="0912xxxxxxx"
            />
          </Box>
        </Box>

        <Box sx={{ mb: { xs: 3, sm: 3.5, md: 4 } }}>
          <Typography
            variant="h5"
            sx={{
              mb: { xs: 1.5, sm: 2, md: 2.5 },
              fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' }
            }}
          >
            جدول کاربران
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, overflowX: 'auto' }}>
            <Card>
              <CardContent sx={{ p: { xs: 1, sm: 1.5, md: 2 } }}>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(5, minmax(120px, 1fr))',
                  gap: 0,
                  border: '1px solid rgba(255,255,255,0.1)',
                  minWidth: '600px',
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }
                }}>
                  {['نام مشتری', 'شماره تماس', 'تاریخ ثبت', 'وضعیت', 'ویرایش'].map((header, index) => (
                    <Box 
                      key={`header-${index}`}
                      sx={{ 
                        fontWeight: 'bold', 
                        color: '#E5C26E', 
                        p: { xs: 1, sm: 1.25, md: 1.5 },
                        borderLeft: index < 4 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        textAlign: 'center',
                        bgcolor: 'rgba(229, 194, 110, 0.05)',
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {header}
                    </Box>
                  ))}
                  
                  {tableData.map((item, rowIndex) => (
                    <>
                      <Box 
                        key={`name-${rowIndex}`}
                        sx={{ 
                          p: { xs: 1, sm: 1.25, md: 1.5 },
                          borderLeft: '1px solid rgba(255,255,255,0.1)',
                          borderBottom: rowIndex < tableData.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                          textAlign: 'center',
                          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.name}
                      </Box>
                      <Box 
                        key={`phone-${rowIndex}`}
                        sx={{ 
                          p: { xs: 1, sm: 1.25, md: 1.5 },
                          borderLeft: '1px solid rgba(255,255,255,0.1)',
                          borderBottom: rowIndex < tableData.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                          textAlign: 'center',
                          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.phone}
                      </Box>
                      <Box 
                        key={`date-${rowIndex}`}
                        sx={{ 
                          p: { xs: 1, sm: 1.25, md: 1.5 },
                          borderLeft: '1px solid rgba(255,255,255,0.1)',
                          borderBottom: rowIndex < tableData.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                          textAlign: 'center',
                          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.date}
                      </Box>
                      <Box 
                        key={`status-${rowIndex}`}
                        sx={{ 
                          p: { xs: 1, sm: 1.25, md: 1.5 },
                          borderLeft: '1px solid rgba(255,255,255,0.1)',
                          borderBottom: rowIndex < tableData.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                          textAlign: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Chip
                          label={item.status}
                          size="small"
                          color={item.status === 'فعال' ? 'success' : 'default'}
                          sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.8rem' } }}
                        />
                      </Box>
                      <Box 
                        key={`edit-${rowIndex}`}
                        sx={{ 
                          p: { xs: 1, sm: 1.25, md: 1.5 },
                          borderLeft: '1px solid rgba(255,255,255,0.1)',
                          borderBottom: rowIndex < tableData.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                          textAlign: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <EditIcon sx={{ cursor: 'pointer', color: '#E5C26E', fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' } }} />
                      </Box>
                    </>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <GridView
              items={tableData}
              columns={1}
              gap={1.5}
              renderItem={(item) => (
                <Card>
                  <CardContent sx={{ p: 1.5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6" sx={{ color: '#E5C26E', fontSize: '0.95rem' }}>
                        {item.name}
                      </Typography>
                      <EditIcon sx={{ cursor: 'pointer', color: '#E5C26E', fontSize: '1.1rem' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        <strong>تلفن:</strong> {item.phone}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        <strong>تاریخ:</strong> {item.date}
                      </Typography>
                      <Box>
                        <Chip
                          label={item.status}
                          size="small"
                          color={item.status === 'فعال' ? 'success' : 'default'}
                          sx={{ fontSize: '0.7rem', height: '20px' }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              )}
            />
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{
              mb: { xs: 1.5, sm: 2, md: 2.5 },
              fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' }
            }}
          >
            تراکنش‌ها
          </Typography>
          <GridView
            items={transactions}
            columns={1}
            gap={1.5}
            renderItem={(item) => (
              <Card>
                <CardContent sx={{ p: { xs: 1.5, sm: 2, md: 2.5 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: { xs: 1, sm: 1.5 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.75, sm: 1 } }}>
                      {getStatusIcon(item.statusIcon)}
                      <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' } }}>
                        {item.type}
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' } }}>
                      {item.weight}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.95rem' } }}>
                      {item.date}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#E5C26E', fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }}>
                      {item.amount.toLocaleString('fa-IR')}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            )}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
