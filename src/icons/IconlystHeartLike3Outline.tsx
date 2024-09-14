import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLike3Outline = ({
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
      d="M15.554 7.051a.75.75 0 0 1 .944-.483 3.38 3.38 0 0 1 2.334 2.947.75.75 0 1 1-1.495.121 1.88 1.88 0 0 0-1.3-1.64.75.75 0 0 1-.483-.945"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.253 21.02a.8.8 0 0 1-.317-.07c-.3-.14-7.393-3.504-9.049-8.812-1.078-3.36.121-7.593 4-8.853a6.5 6.5 0 0 1 3.03-.207c.851.193 1.65.574 2.336 1.114a5.8 5.8 0 0 1 2.342-1.122 6.5 6.5 0 0 1 3.027.214c3.873 1.248 5.07 5.484 3.987 8.859-1.756 5.363-8.742 8.668-9.038 8.807a.8.8 0 0 1-.318.07M8.834 4.488c-.505 0-1.008.075-1.49.226-3.09 1.005-3.866 4.342-3.023 6.971 1.28 4.1 6.578 7.05 7.936 7.748 1.346-.694 6.573-3.614 7.928-7.752.844-2.631.073-5.971-3.019-6.968a4.95 4.95 0 0 0-2.32-.164 5.7 5.7 0 0 0-2.139 1.173.75.75 0 0 1-.9 0 5.7 5.7 0 0 0-2.145-1.168 5 5 0 0 0-.828-.066"
    />
  </Svg>
);
export default IconlystHeartLike3Outline;
