import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImacBold = ({
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
      d="M21.5 5.517v5.5a.2.2 0 0 1-.2.2H2.7a.2.2 0 0 1-.2-.2v-5.5c0-1.94 1.57-3.51 3.51-3.51h11.98c1.94 0 3.51 1.57 3.51 3.51M21.3 12.717c.11 0 .2.09.2.2v.1c0 1.93-1.57 3.5-3.51 3.5H6.01c-1.94 0-3.51-1.57-3.51-3.5v-.1c0-.11.09-.2.2-.2zM14.532 17.833a.5.5 0 0 0-.457-.247H9.852v.007a.5.5 0 0 0-.361.237l-1.626 2.148c-.241.422-.24.925.003 1.344.244.42.68.67 1.168.67h5.932a1.33 1.33 0 0 0 1.159-.667c.244-.417.249-.917.01-1.338z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImacBold;
