import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartEyesBulk = ({
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
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.761 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.876 10.167c-.59 1.043-2.251 1.553-2.321 1.575l-.131.038-.104-.088c-.055-.047-1.36-1.175-1.481-2.383-.08-.786.383-1.653 1.292-1.746a1.44 1.44 0 0 1 1.112.362c.382-.122.804-.08 1.159.119.796.456.866 1.437.474 2.122M12.5 18.25c-1.462 0-3.63-1.244-3.63-2.963a.75.75 0 0 1 .75-.75h5.76a.75.75 0 0 1 .75.75c0 1.719-2.168 2.963-3.63 2.963M7.019 10.166c-.392-.683-.323-1.664.47-2.121a1.49 1.49 0 0 1 1.162-.12c.302-.27.7-.405 1.114-.362.909.093 1.37.96 1.292 1.746-.123 1.208-1.426 2.336-1.481 2.383l-.104.088-.131-.038c-.07-.022-1.732-.532-2.322-1.577"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartEyesBulk;
