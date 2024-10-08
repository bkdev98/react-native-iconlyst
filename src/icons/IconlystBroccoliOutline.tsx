import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroccoliOutline = ({
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
      d="M7.898 4.732A4.11 4.11 0 0 1 11.504 2.6c1.557 0 2.911.866 3.61 2.14q.157-.015.316-.015a3.246 3.246 0 0 1 3.243 3.382 4.288 4.288 0 0 1-1.21 8.4c-1.052 0-2.03-.207-2.86-1.001a.75.75 0 1 1 1.039-1.083c.441.423.975.583 1.822.583a2.786 2.786 0 0 0 .28-5.558.75.75 0 0 1-.644-.966q.075-.241.076-.511a1.746 1.746 0 0 0-2.274-1.665.75.75 0 0 1-.934-.465 2.614 2.614 0 0 0-4.898-.082.75.75 0 0 1-.761.473 1.94 1.94 0 0 0-1.985 2.617.75.75 0 0 1-.538.995 2.614 2.614 0 1 0 2.261 4.547.75.75 0 0 1 .775-.118c.33.138.694.215 1.077.215.481 0 .931-.12 1.325-.334a.75.75 0 0 1 .714 1.32 4.3 4.3 0 0 1-2.039.514c-.43 0-.846-.063-1.24-.182a4.113 4.113 0 1 1-3.93-7.188q-.03-.223-.03-.452a3.44 3.44 0 0 1 3.199-3.433"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.738 8.832a.75.75 0 0 1-.95-.472 2.76 2.76 0 0 1 1.738-3.495.75.75 0 1 1 .477 1.422 1.26 1.26 0 0 0-.793 1.596.75.75 0 0 1-.472.95M4.354 9.508a.75.75 0 0 1 .49-.941 2.53 2.53 0 0 1 3.175 1.652.75.75 0 0 1-1.43.452 1.03 1.03 0 0 0-1.294-.674.75.75 0 0 1-.94-.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.504 4.1a2.613 2.613 0 0 0-.548 5.168.75.75 0 0 1 .469 1.147 2.613 2.613 0 1 0 4.795 1.438.75.75 0 1 1 1.5 0 4.113 4.113 0 1 1-7.974-1.421 4.113 4.113 0 0 1 1.758-7.833.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.56 15.215a.75.75 0 0 1 .75-.75c.605 0 .987.445 1.184.75.22.341.387.773.513 1.205.254.87.395 1.926.395 2.737 0 .18.08.34.35.49.291.163.737.263 1.234.253.495-.01.951-.125 1.256-.3.3-.17.356-.33.356-.443 0-.829.179-1.89.447-2.75.134-.43.303-.851.509-1.181.102-.165.233-.338.4-.478s.417-.283.736-.283a.75.75 0 0 1 .19 1.476 1 1 0 0 0-.053.078c-.11.177-.234.463-.35.834-.23.739-.379 1.649-.379 2.304 0 .837-.53 1.414-1.112 1.746-.575.329-1.293.484-1.972.497-.677.013-1.405-.114-1.994-.443-.611-.342-1.118-.94-1.118-1.8 0-.673-.122-1.587-.335-2.317-.107-.37-.225-.644-.333-.81a1 1 0 0 0-.054-.076.75.75 0 0 1-.62-.739m.587.704.009.007z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBroccoliOutline;
