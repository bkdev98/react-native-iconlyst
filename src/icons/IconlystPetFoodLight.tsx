import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetFoodLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4 20.316.755-7.283a2 2 0 0 1 1.98-1.717h10.53a2 2 0 0 1 1.98 1.717L20 20.316M3 20.316h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.002 15.51c1.112 0 2.014.806 2.014 1.799 0 .33-.18.843-.671.599-1.054-.315-1.635-.335-2.686 0-.478.208-.671-.268-.671-.6 0-.992.902-1.797 2.014-1.797M14.457 14.241h.007M9.536 14.241h.007M11.996 13.42h.008M7.317 9.205l-.52-.75M11.11 10.983l1.5-.706M9.55 7.14l.875.202M14.645 7.14 14 7.697M17.95 8.33l-.753.5M12.117 5.23l-.515-.945"
    />
  </Svg>
);
export default IconlystPetFoodLight;
