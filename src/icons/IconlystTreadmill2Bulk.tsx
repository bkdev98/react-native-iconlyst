import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadmill2Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M17.229 14.49a3.03 3.03 0 0 0-1.852-1.56l-6.895-2.032a3.99 3.99 0 0 0-4.72 2.067c-.62 1.258-.531 2.77.265 4a4.1 4.1 0 0 0 3.448 1.872h7.049a3.035 3.035 0 0 0 2.813-1.927 3.02 3.02 0 0 0-.108-2.42"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M19.187 2.653a.75.75 0 0 1 1.416.496c-1.115 3.186-2.43 3.87-4.347 3.67l-1.463 5.939-1.44-.425 1.61-6.536a.75.75 0 0 1 .867-.559c1.385.263 2.3.433 3.357-2.585M8.51 10.906l-.906-3.632 1.28.161a.749.749 0 1 0 .187-1.488L4.64 5.388a.75.75 0 1 0-.188 1.488l1.556.196.918 3.682a4 4 0 0 1 1.556.144z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.025 19.392a1.23 1.23 0 0 0 0 2.458 1.23 1.23 0 0 0 0-2.458M17.038 19.392a1.23 1.23 0 0 0 0 2.458 1.23 1.23 0 0 0 0-2.458M9.866 15.722H7.82a.75.75 0 0 1 0-1.5h2.047a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreadmill2Bulk;
