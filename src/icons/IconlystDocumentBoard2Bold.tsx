import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBoard2Bold = ({
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
      d="M9.082 10.401h5.833a.75.75 0 0 1 0 1.5H9.082a.75.75 0 0 1 0-1.5m0-3.784h3.101a.75.75 0 0 1 0 1.5h-3.1a.75.75 0 0 1 0-1.5m10.766 8.234a.2.2 0 0 0 .2-.2V6.524A4.03 4.03 0 0 0 16.024 2.5H7.975a4.03 4.03 0 0 0-4.024 4.024v8.127c0 .11.09.2.2.2zM4.152 16.351a.2.2 0 0 0-.2.2v.924A4.03 4.03 0 0 0 7.975 21.5h8.05a4.03 4.03 0 0 0 4.024-4.024v-.924a.2.2 0 0 0-.2-.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentBoard2Bold;
