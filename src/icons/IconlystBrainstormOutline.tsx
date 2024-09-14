import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainstormOutline = ({
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
      d="M9.53 7.293a.75.75 0 0 0 .278-1.023 3.63 3.63 0 0 0-3.15-1.832.75.75 0 0 0 0 1.5c.787 0 1.478.43 1.849 1.077a.75.75 0 0 0 1.023.278M3.775 16.777a.75.75 0 0 0 .75-.75c0-.964.627-1.777 1.488-2.052a.75.75 0 0 0-.457-1.43 3.65 3.65 0 0 0-2.53 3.482c0 .415.335.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.76 20.15a1.496 1.496 0 0 1-1.486-1.402.75.75 0 0 0-.975-.666 2.1 2.1 0 0 1-.64.099 2.143 2.143 0 0 1-2.134-2.153c0-.542.197-1.034.523-1.412a.75.75 0 0 0-.334-1.202 1.41 1.41 0 0 1-.964-1.344c0-.632.411-1.165.974-1.346a.75.75 0 0 0 .335-1.208 2.15 2.15 0 0 1-.534-1.424c0-1.194.96-2.153 2.133-2.153q.336.001.637.097a.75.75 0 0 0 .975-.704A1.497 1.497 0 0 1 9.76 3.85c.818 0 1.49.67 1.49 1.506a.75.75 0 0 0 1.5 0A3 3 0 0 0 9.76 2.35c-1.34 0-2.468.884-2.85 2.097a4 4 0 0 0-.252-.008c-2.011 0-3.633 1.64-3.633 3.653 0 .59.14 1.15.389 1.645A2.91 2.91 0 0 0 2.25 12.07c0 .95.453 1.796 1.156 2.328a3.66 3.66 0 0 0-.381 1.63c0 2.012 1.622 3.653 3.633 3.653q.147 0 .29-.012A2.99 2.99 0 0 0 9.76 21.65c1.656 0 2.99-1.35 2.99-3.005a.75.75 0 0 0-1.5 0c0 .836-.672 1.505-1.49 1.505M14.586 6.953a.75.75 0 0 1-.154-1.05 3.62 3.62 0 0 1 2.91-1.465.75.75 0 0 1 0 1.5c-.696 0-1.316.336-1.707.861a.75.75 0 0 1-1.05.154M14.586 17.16a.75.75 0 0 0-.154 1.05 3.62 3.62 0 0 0 2.91 1.465.75.75 0 0 0 0-1.5 2.12 2.12 0 0 1-1.707-.861.75.75 0 0 0-1.05-.154"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.414 17.16a.75.75 0 0 1 .154 1.05 3.62 3.62 0 0 1-2.91 1.465.75.75 0 0 1 0-1.5c.696 0 1.316-.336 1.707-.861a.75.75 0 0 1 1.05-.154M20.225 16.777a.75.75 0 0 1-.75-.75c0-.922-.574-1.707-1.379-2.014a.75.75 0 0 1 .536-1.401 3.65 3.65 0 0 1 2.343 3.415.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.24 20.15c.784 0 1.434-.615 1.486-1.402a.75.75 0 0 1 .975-.666q.304.098.64.099c1.174 0 2.134-.96 2.134-2.153 0-.542-.197-1.034-.523-1.412a.75.75 0 0 1 .334-1.202c.558-.184.964-.714.964-1.344 0-.632-.411-1.165-.974-1.346a.75.75 0 0 1-.335-1.208c.333-.38.534-.877.534-1.424 0-1.194-.96-2.153-2.134-2.153q-.335.001-.636.097a.75.75 0 0 1-.975-.704 1.497 1.497 0 0 0-1.49-1.482c-.818 0-1.49.67-1.49 1.506a.75.75 0 0 1-1.5 0 3 3 0 0 1 2.99-3.006c1.34 0 2.468.884 2.85 2.097q.125-.008.252-.008c2.011 0 3.633 1.64 3.633 3.653 0 .59-.14 1.15-.389 1.645a2.91 2.91 0 0 1 1.164 2.333c0 .95-.453 1.796-1.156 2.328.244.491.381 1.045.381 1.63 0 2.012-1.622 3.653-3.634 3.653q-.146 0-.29-.012a2.99 2.99 0 0 1-2.811 1.981 3 3 0 0 1-2.99-3.005.75.75 0 0 1 1.5 0c0 .836.672 1.505 1.49 1.505"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.328 7.921a.75.75 0 0 1 .3 1.018l-1.257 2.312h2.44a.75.75 0 0 1 .66 1.109l-1.863 3.419a.75.75 0 0 1-1.317-.717l1.258-2.31h-2.44a.75.75 0 0 1-.659-1.11l1.86-3.42a.75.75 0 0 1 1.018-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBrainstormOutline;
