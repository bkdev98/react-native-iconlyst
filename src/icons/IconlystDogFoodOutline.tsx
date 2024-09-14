import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogFoodOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M15.434 17.626c-.78 0-1.45-.47-1.74-1.15h-3.37c-.09.22-.23.42-.4.59-.36.36-.83.56-1.34.56a1.9 1.9 0 0 1-1.59-2.94 1.9 1.9 0 0 1 1.59-2.94c.51 0 .98.2 1.34.56.17.17.31.37.4.59h3.37c.29-.67.96-1.15 1.74-1.15a1.9 1.9 0 0 1 1.59 2.94 1.9 1.9 0 0 1-1.59 2.94m-1.15-2.65a.75.75 0 0 1 .75.75c0 .22.18.4.4.4s.4-.18.4-.4c0-.18-.12-.31-.23-.36a.753.753 0 0 1 0-1.36.39.39 0 0 0 .23-.36c0-.22-.18-.4-.4-.4s-.4.18-.4.4c0 .41-.34.75-.75.75h-4.56a.75.75 0 0 1-.75-.75c0-.11-.04-.21-.12-.28-.23-.23-.68-.05-.68.28 0 .18.12.3.23.36a.753.753 0 0 1 0 1.36.39.39 0 0 0-.23.36c0 .32.45.51.68.28.07-.07.12-.17.12-.28a.75.75 0 0 1 .75-.75zM12.004 11.196c-4.6 0-9.26-1.21-9.26-3.52s4.66-3.52 9.26-3.52 9.26 1.21 9.26 3.52-4.66 3.52-9.26 3.52m0-5.53c-5.12 0-7.76 1.41-7.76 2.02s2.64 2.02 7.76 2.02 7.76-1.41 7.76-2.02-2.64-2.02-7.76-2.02"
    />
    <Path
      fill={props.color}
      d="M12.004 20.446c-3.2 0-7.44-.84-9.18-2.68-.57-.6-.85-1.3-.82-2.02l.74-8.07 1.49.14-.74 8.04c-.01.28.12.57.41.88 1.19 1.26 4.67 2.21 8.09 2.21s6.9-.95 8.09-2.21c.29-.31.42-.6.41-.91l-.73-8.02 1.49-.14.74 8.04c.04.74-.24 1.44-.81 2.05-1.74 1.84-5.98 2.68-9.18 2.68z"
    />
  </Svg>
);
export default IconlystDogFoodOutline;
