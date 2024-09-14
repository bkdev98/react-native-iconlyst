import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillDownOutline = ({
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
      fill={props.color}
      d="M11.265 21.63a.75.75 0 0 1-.69.063l-2.174-.886a1.06 1.06 0 0 0-.859.023l-.77.37a1.97 1.97 0 0 1-2.822-1.78l.01-12.438c0-1.363.381-2.562 1.195-3.427.576-.612 1.325-1.008 2.2-1.19a6 6 0 0 1 1.178-.115h7.408c1.39 0 2.557.436 3.371 1.309.807.865 1.178 2.064 1.178 3.423v4.291a.75.75 0 0 1-1.5 0v-4.29c0-1.098-.298-1.891-.775-2.403-.47-.504-1.202-.83-2.274-.83H8.533c-1.069 0-1.809.326-2.287.834a2.74 2.74 0 0 0-.629 1.158c-.101.36-.157.772-.157 1.242l-.01 12.438c0 .348.361.574.674.426l.772-.37a2.56 2.56 0 0 1 2.072-.06l2.175.889a.748.748 0 0 1 .122 1.324"
    />
    <Path
      fill={props.color}
      d="M15.077 9.043a.75.75 0 0 1-.75.75H9.358a.75.75 0 1 1 0-1.5h4.97a.75.75 0 0 1 .75.75M13.42 12.902a.75.75 0 0 1-.75.75H9.358a.75.75 0 1 1 0-1.5h3.312a.75.75 0 0 1 .75.75M16.576 19.186l-1.136-1.141a.75.75 0 0 0-1.063 1.058l2.415 2.426a1 1 0 0 0 .057.05c.12.099.273.163.439.171h.054a.76.76 0 0 0 .553-.26l2.377-2.386a.75.75 0 0 0-1.064-1.06l-1.132 1.138v-4.323a.75.75 0 0 0-1.5 0z"
    />
  </Svg>
);
export default IconlystReceiptBillDownOutline;
