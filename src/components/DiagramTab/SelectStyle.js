export const SelectStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      boxShadow: 'none',
      minWidth: '110px',
      height: '50px',
      paddingTop: '3px',
      paddingLeft: '20px',
      border: '1px solid #000',
      borderRadius: '30px',
      outline: 'none',
      "&:hover": {
        borderColor: '#000',
        cursor: 'pointer',
      },
      '@media screen and (min-width: 768px)': {
        width: '160px',
      },
      '@media screen and (min-width: 1280px)': {
        width: '180px',
      },
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      color: '#000',
      minWidth: '110px',
      cursor: 'pointer',
      borderRadius: '20px',
      backdropFilter: 'blur(25px)',
      "&:hover": {
          
        cursor: 'pointer',
      },
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      color: '#000',
      minWidth: '110px',
      height: '157px',
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(25px)',
      borderRadius: '20px',
      scroll: 'none',
     
      "&:hover": {
          
        cursor: 'pointer',
      },
    }),
      valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            color: '#000',
            border: 'none',
            }),
        placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: '#000',
            }),
        indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            display: 'none',
            }),
        indicatorsContainer: (baseStyles, state) => ({
            ...baseStyles,
            width: '50px',
            }),
        indicatorContainer: (baseStyles, state) => ({
            ...baseStyles,
            paddingRight: '20px',
        })
    }