import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailPrivacyOutline = ({
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
      d="M7.795 20.59a5.02 5.02 0 0 1-3.623-1.47 5.92 5.92 0 0 1-1.665-4.25V8.728a5.407 5.407 0 0 1 5.3-5.729h8.778a5.406 5.406 0 0 1 5.3 5.729v1.671a.75.75 0 0 1-1.5 0V8.728c0-2.45-1.6-4.229-3.8-4.229H7.81c-2.2 0-3.8 1.779-3.8 4.229v6.142a4.44 4.44 0 0 0 1.225 3.188 3.55 3.55 0 0 0 2.563 1.032h4.32a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M12.222 13.409a2.8 2.8 0 0 1-1.742-.611L6.47 9.564a.75.75 0 0 1 .94-1.168l4.007 3.231a1.3 1.3 0 0 0 1.62 0l3.966-3.225a.75.75 0 0 1 .946 1.164l-3.973 3.224a2.82 2.82 0 0 1-1.754.619M18.494 21a.8.8 0 0 1-.217-.031c-.134-.041-3.272-1.022-3.272-3.833 0-.7-.01-1.18-.016-1.51-.016-.806-.021-1.078.356-1.456a9.3 9.3 0 0 1 3.149-1.151 9.2 9.2 0 0 1 3.15 1.154c.376.378.37.649.355 1.453-.007.33-.016.809-.016 1.51 0 2.81-3.138 3.792-3.272 3.833a.8.8 0 0 1-.217.032m-2.013-5.787c0 .093 0 .216.008.383.006.338.016.825.016 1.54 0 1.37 1.43 2.088 1.989 2.316.558-.228 1.989-.946 1.989-2.316 0-.715.009-1.2.016-1.54 0-.173.007-.3.008-.394a13.5 13.5 0 0 0-2.046-.684q-1.016.275-1.98.695"
    />
  </Svg>
);
export default IconlystEmailPrivacyOutline;
