import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDocumentOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 1 0 20.5 12a.75.75 0 0 1 1.5 0 9.72 9.72 0 0 1-3.101 7.131l3.225 3.217a.75.75 0 0 1-1.06 1.062l-3.345-3.337a9.7 9.7 0 0 1-5.469 1.677c-5.384 0-9.75-4.365-9.75-9.75s4.366-9.75 9.75-9.75a.75.75 0 0 1 0 1.5m2.533 1.839a.75.75 0 0 1 .75-.75h5.685a.75.75 0 0 1 0 1.5h-5.685a.75.75 0 0 1-.75-.75m0 3.468a.75.75 0 0 1 .75-.75h2.842a.75.75 0 0 1 0 1.5h-2.842a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchDocumentOutline;
