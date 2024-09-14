import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaRainyLight = ({
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
      d="M12.228 9.576a8.283 8.283 0 0 0-8.283 8.283c1.743.079 2.61.327 3.773 1.141 3.557-1.38 5.45-1.356 9.012 0 1.25-.915 2.102-1.11 3.78-1.141a8.283 8.283 0 0 0-8.282-8.283M12.229 17.99V21M12.229 8.044v1.532M15.805 3l-1.266 3.633M11.03 3l-.658 1.89M19.376 3l-.746 2.142M20.51 7.435l-.746 2.141M5.85 8.865l1.014-2.959H3.719l1.046-2.952"
    />
  </Svg>
);
export default IconlystUmbrellaRainyLight;
