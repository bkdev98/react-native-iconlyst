import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPdfBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.831 12.952V9.16c0-.544-.21-1.067-.586-1.459L15.35 3.647A2.1 2.1 0 0 0 13.832 3H8.03a3.847 3.847 0 0 0-3.861 3.756v6.196"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.328 6.031a2.63 2.63 0 0 0 2.623 2.63h2.813M4.416 19.472h1.397a1.547 1.547 0 0 0 0-3.093H4.416v4.615M19.83 16.375h-2.506v4.626m2.12-1.927h-2.12M13.29 20.323a2.31 2.31 0 0 0 0-3.27 2.31 2.31 0 0 0-1.636-.678h-1.156v4.626"
    />
  </Svg>
);
export default IconlystDocumentPdfBroken;
