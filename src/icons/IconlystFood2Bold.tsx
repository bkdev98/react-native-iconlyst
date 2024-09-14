import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood2Bold = ({
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
      d="M7.784 2.5c-1.598 0-2.932.567-3.864 1.568-.928.997-1.42 2.383-1.42 3.958v7.948c0 1.575.492 2.961 1.42 3.958.932 1 2.266 1.568 3.863 1.568h8.435c1.593 0 2.927-.567 3.859-1.568.929-.996 1.423-2.382 1.423-3.958V8.026c0-1.575-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568zm4.769 5.487a.552.552 0 0 0-1.105 0V8.7c-1.208.099-2.3.522-3.112 1.232-.94.823-1.487 2.015-1.414 3.472a.307.307 0 0 0 .306.291h9.545a.307.307 0 0 0 .307-.292c.072-1.456-.475-2.648-1.415-3.47-.812-.711-1.904-1.134-3.112-1.233zm-6.2 6.51a.67.67 0 0 1 .432-.138h10.431c.155 0 .307.038.43.138.125.1.188.233.215.36.05.235-.008.503-.079.715a1.45 1.45 0 0 1-1.378.993H7.597c-.625 0-1.18-.4-1.378-.993-.07-.212-.13-.48-.079-.715a.62.62 0 0 1 .214-.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFood2Bold;
