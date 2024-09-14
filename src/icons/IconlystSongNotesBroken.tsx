import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongNotesBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.943 16.726a2.153 2.153 0 1 0 1.343-1.995M9.52 16.488a2.153 2.153 0 1 1-.781 2.563M3.25 10.42A2.167 2.167 0 1 0 4.487 8.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.584 10.337V3.586s.585 1.52 2.157 1.84M12.893 18.261V8.038c2.788.218 5.62-.264 8.356-1.536v10.224"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.893 11.689a16.4 16.4 0 0 0 5.453-.487"
    />
  </Svg>
);
export default IconlystSongNotesBroken;
