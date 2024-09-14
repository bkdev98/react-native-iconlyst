import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowelHappyBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.44 6.19c.45.12.89.18 1.34.18.44 0 .89-.06 1.32-.18a.765.765 0 0 0 .52-.93.745.745 0 0 0-.92-.52c-.62.18-1.23.17-1.86 0-.4-.11-.81.12-.92.52-.03.12-.04.25-.01.36.06.27.25.49.53.57"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.71 12.36c.19.31.31.52.31 1.01 0 .48-.12.69-.3 1-.24.39-.53.87-.53 1.78 0 .59.12.99.27 1.31h-2.41V5.62c0-.75-.41-1.37-1.1-1.87h3.49c-.14.32-.25.72-.25 1.27 0 .91.29 1.39.52 1.78.19.31.31.52.31 1 0 .5-.12.71-.31 1.02-.23.39-.52.87-.52 1.76 0 .9.29 1.39.52 1.78M7.46 14.9c.32-.25.79-.19 1.05.13.65.84 1.86.84 2.51 0 .25-.32.72-.38 1.05-.13.33.26.39.73.13 1.05-.61.79-1.5 1.24-2.44 1.24-.93 0-1.82-.45-2.44-1.24a.75.75 0 0 1 .14-1.05m.1-3.54c.42 0 .75.32.75.73v.03c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75 0-.41.34-.76.75-.76m4.91.73v.03c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75 0-.41.34-.76.75-.76.42 0 .75.32.75.73M9.76 3.75c3.48 0 5.79 1.13 5.79 1.87 0 .64-2.04 1.86-5.79 1.86-3.74 0-5.78-1.22-5.78-1.86 0-.74 2.3-1.87 5.78-1.87m11.76 9.62c0-.9-.29-1.39-.52-1.78-.19-.31-.31-.52-.31-1.01 0-.47.12-.68.31-.99.23-.39.52-.88.52-1.79 0-.9-.29-1.38-.52-1.77-.19-.31-.31-.52-.31-1.01 0-.48.12-.68.31-1 .13-.21.28-.46.38-.79.07-.23.03-.47-.11-.67a.75.75 0 0 0-.6-.31H10.16c-.01 0-.03 0-.04.01h-.01c-.01-.01-.01-.01-.02 0-.11-.01-.22-.01-.33-.01-3.62 0-7.28 1.16-7.28 3.37v12.77c0 2.21 3.66 3.36 7.28 3.36 3.29 0 6.63-.95 7.21-2.79h3.71c.24 0 .46-.11.6-.3s.19-.43.12-.66c-.11-.36-.27-.63-.4-.84-.19-.31-.31-.52-.31-1.01s.12-.7.31-1.01c.23-.39.52-.87.52-1.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTowelHappyBold;
