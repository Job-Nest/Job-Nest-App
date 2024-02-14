import WelcomeStats from './welcomeStats/page';
import Listings from './listings/page';

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: 250 }}
//       role='presentation'
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         <h1>Job Nest</h1>
//         {['Home', 'Archive', 'Settings'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-end',
//           background: 'red',
//           color: 'white',
//         }}
//       >
//         {['Sign Out'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {/* {['left'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>
//             <MenuIcon fontSize='large'></MenuIcon>
//           </Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))} */}
//       <WelcomeStats />
//       <Listings />
//     </div>
//   );
// }

export default function Home() {
  //   console.log({
  //     POSTGRES_URL: process.env.POSTGRES_URL,
  //     POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  //   });
  //   const { rows } = await sql`SELECT * from users;`;
  //   console.log(rows);
  return (
    <main
      className='welcome-stats'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <WelcomeStats />
      <Listings />
    </main>
  );
}
