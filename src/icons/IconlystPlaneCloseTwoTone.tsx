import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneCloseTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.097 12.504c1.257-.522 3.738-1.587 5.016-2.118L6.77 4.711c.636-.227 1.215-.49 1.824-.636.71-.17 1.323.153 1.846.61a194 194 0 0 1 3.57 3.185c.296.273.53.299.883.143 1.02-.45 2.043-.898 3.09-1.276 1.21-.436 2.935-.482 3.363 1.044.338 1.206-.7 2.231-1.722 2.663a624 624 0 0 1-10.199 4.218c-2.432.976-4.356.124-5.388-2.296-.092-.217-.446-1.076-.536-1.294"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.445 19.97h8.585M21.464 16.423l-3.422 3.422m3.458.036-3.49-3.49"
    />
  </Svg>
);
export default IconlystPlaneCloseTwoTone;
