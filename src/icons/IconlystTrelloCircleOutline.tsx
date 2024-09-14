import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrelloCircleOutline = ({
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
      d="M14.205 8.824a.035.035 0 0 0-.035.035V12c0 .019.016.034.035.034h1.57a.035.035 0 0 0 .034-.034v-3.14a.035.035 0 0 0-.034-.035zm-1.535.035c0-.847.687-1.535 1.535-1.535h1.57c.847 0 1.534.688 1.534 1.535V12c0 .847-.687 1.534-1.534 1.534h-1.57A1.535 1.535 0 0 1 12.67 12zM8.225 8.824a.035.035 0 0 0-.035.035v6.28c0 .018.016.034.035.034h1.57a.035.035 0 0 0 .035-.035V8.86a.035.035 0 0 0-.035-.035zM6.69 8.86c0-.847.688-1.535 1.535-1.535h1.57c.848 0 1.535.688 1.535 1.535v6.28c0 .847-.687 1.534-1.535 1.534h-1.57a1.535 1.535 0 0 1-1.535-1.535z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrelloCircleOutline;
