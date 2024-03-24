import React, { useEffect, useState, useRef } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Typography, Link, Divider, Button, Tooltip } from '@mui/material';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';
import { domainUrl } from '../../domainUrl'

export default function UrlList({ isGenerated }) {
  const [urls, setUrls] = useState([]);
  const [copyTitle, setCopyTitle] = useState('Copy');
  const [isUrlDeletedConfirm, setIsUrlDeletedConfirm] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(null);
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    axios.get(`${baseUrl}/user/urls`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setUrls(response.data.data);
    }).catch((error) => console.log(error));
  }, [isGenerated, isUrlDeletedConfirm]);

  const handleUrlDelete = (urlId) => {
    const token = localStorage.getItem('access_token');
    axios.delete(`${baseUrl}/url?id=${urlId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setIsUrlDeletedConfirm({ state: true });
    }).catch((error) => console.log(error));
  };

  const handleCopyLink = (url) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(() => {
          setCopiedUrl(url);
          setCopyTitle("Copied!");
          clearTimeout(copyTimeoutRef.current);
          copyTimeoutRef.current = setTimeout(() => {
            setCopyTitle("Copy");
          }, 3000);
        })
        .catch((error) => {
          console.error('Failed to copy text: ', error);
        });
    } else {
      console.error('Clipboard API not supported');
    }
  };

  if (!urls || urls.length === 0) {
    return <div className='text-xl text-white'>No Urls Yet</div>;
  } else {
    return (
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
        className='max-w-[330px] sm: md:max-w-[500px] rounded-md'
      >
        <ul>
          {urls.map((url, index) => (
            <div className='w-full' key={index}>
              <ListItem className='flex flex-col justify-center gap-3'>

                <Link href={`${domainUrl}/${url.shortId}`}>{`${domainUrl}/${url.shortId}`}</Link>

                <Typography variant="body2" color="text.secondary" className='  whitespace-pre-wrap w-96 px-7 sm:w-[500px] sm:px-3 overflow-auto'>
                  Original Url - {url.actualUrl}
                </Typography>

                <div id='buttons' className='flex justify-center gap-10 w-full'>

                  <Tooltip title="Delete">
                    <Button onClick={() => handleUrlDelete(url._id)}><DeleteOutline sx={{ cursor: "pointer", color: "tomato" }} /></Button>
                  </Tooltip>

                  <Tooltip title={copyTitle}>
                    <Button onClick={() => handleCopyLink(`${domainUrl}/${url.shortId}`)}><ContentCopyIcon sx={{ cursor: "pointer" }} className={copyTitle === "Copied!" && copiedUrl === `${domainUrl}/${url.shortId}` ? "text-green-500" : ''} /></Button>
                  </Tooltip>
                </div>
              </ListItem>
              <Divider />
            </div>
          ))}
        </ul>
      </List>
    );
  }
}
