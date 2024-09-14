import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.497 16.413c-2.638-3.2-3.953-2.914-5.399-2.21-1 .486-1.865.908-4.11-1.34-2.247-2.246-1.826-3.11-1.34-4.108.705-1.447.991-2.765-2.212-5.402-.763-.625-1.595-.865-2.46-.697-1.834.343-3.129 2.383-3.127 2.383C2.037 6.175.925 9.59 8.092 16.759c4.714 4.715 7.805 5.846 9.681 5.846.977 0 1.623-.306 1.997-.576.021-.012 2.08-1.287 2.426-3.155.162-.87-.073-1.697-.699-2.461"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallBoldcurved;
