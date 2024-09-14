import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartEyesBold = ({
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
      d="M17.376 10.168c-.589 1.044-2.251 1.554-2.321 1.575l-.131.039-.104-.089c-.055-.047-1.359-1.175-1.481-2.383-.079-.786.383-1.653 1.292-1.746a1.44 1.44 0 0 1 1.112.362c.382-.122.804-.08 1.159.119.796.456.866 1.437.474 2.123M12 18.251c-1.462 0-3.63-1.244-3.63-2.962a.75.75 0 0 1 .75-.75h5.76a.75.75 0 0 1 .75.75c0 1.718-2.168 2.962-3.63 2.962m-5.481-8.084c-.392-.683-.323-1.664.471-2.121a1.49 1.49 0 0 1 1.161-.12c.302-.269.7-.405 1.114-.362.909.093 1.371.96 1.292 1.746-.123 1.208-1.426 2.336-1.481 2.383l-.104.089-.131-.039c-.07-.021-1.732-.531-2.322-1.576M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartEyesBold;
