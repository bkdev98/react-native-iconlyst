import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdCheckOutline = ({
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
      d="M4.865 6.218C4.33 6.792 4 7.64 4 8.706v3.95a.75.75 0 0 1-1.5 0v-3.95c0-1.376.43-2.611 1.267-3.51.842-.905 2.04-1.407 3.448-1.407h10.07c1.404 0 2.602.502 3.445 1.406.838.899 1.27 2.135 1.27 3.511v6.587c0 1.376-.43 2.612-1.267 3.51-.843.905-2.04 1.407-3.448 1.407h-4.412a.75.75 0 0 1 0-1.5h4.412c1.037 0 1.821-.361 2.35-.929.535-.574.865-1.421.865-2.488V8.706c0-1.065-.331-1.913-.867-2.488-.53-.568-1.315-.929-2.348-.929H7.215c-1.037 0-1.821.36-2.35.929"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.832a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M11.052 14.352a.75.75 0 0 1 0 1.061l-4.574 4.576a.75.75 0 0 1-1.06 0l-2.22-2.224a.75.75 0 1 1 1.061-1.06l1.69 1.693 4.042-4.045a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdCheckOutline;
