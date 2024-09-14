import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNetworkOutline = ({
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
      d="M12.771 14.9a.75.75 0 0 1 1.049.16l.72.982a.25.25 0 0 0 .201.102h2.941a.75.75 0 0 1 0 1.5h-2.94a1.75 1.75 0 0 1-1.412-.715l-.72-.981a.75.75 0 0 1 .161-1.049"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.424 16.333a.547.547 0 1 0-.822.722.547.547 0 0 0 .822-.723m-1.762-1.177a2.047 2.047 0 1 1 2.702 3.075 2.047 2.047 0 0 1-2.702-3.075M18.573 8.634a.75.75 0 0 1 .492.94l-.805 2.576a1.75 1.75 0 0 1-1.556 1.224l-1.04.068a.75.75 0 0 1-.096-1.497l1.038-.068a.25.25 0 0 0 .223-.174l.805-2.577a.75.75 0 0 1 .94-.492"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.418 8.012a.547.547 0 1 0-1.053.294.547.547 0 0 0 1.053-.294M18.34 6.187a2.047 2.047 0 1 1 1.102 3.943 2.047 2.047 0 0 1-1.102-3.943M10.521 4.677a.75.75 0 0 1 1.036-.226l2.454 1.574a1.75 1.75 0 0 1 .652 2.187l-.347.777a.75.75 0 0 1-1.37-.612l.348-.777a.25.25 0 0 0-.094-.312l-2.453-1.575a.75.75 0 0 1-.226-1.036"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.107 3.75a.547.547 0 1 0-.006 1.094.547.547 0 0 0 .006-1.094m-2.05.536a2.047 2.047 0 1 1 4.094.022 2.047 2.047 0 0 1-4.094-.022M6.514 9.148a1.75 1.75 0 0 1 2.128-.733l.936.36a.75.75 0 0 1-.538 1.4l-.935-.36a.25.25 0 0 0-.304.105l-1.35 2.25a.75.75 0 1 1-1.286-.773z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.987 12.318a.547.547 0 1 0 0 1.094.547.547 0 0 0 0-1.094m-2.047.547a2.047 2.047 0 1 1 4.094 0 2.047 2.047 0 0 1-4.094 0M9.626 13.779a.75.75 0 0 1 .268 1.026l-.514.877a.25.25 0 0 0-.007.24l1.084 2.145a.75.75 0 1 1-1.34.676l-1.083-2.146a1.75 1.75 0 0 1 .052-1.673l.514-.877a.75.75 0 0 1 1.026-.268"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.364 19.232a.547.547 0 1 0-.553.944.547.547 0 0 0 .553-.944m-2.043-.563a2.047 2.047 0 1 1 3.533 2.07 2.047 2.047 0 0 1-3.533-2.07M11.996 9.076a2.91 2.91 0 1 0 0 5.82 2.91 2.91 0 0 0 0-5.82m-4.41 2.91a4.41 4.41 0 1 1 8.82 0 4.41 4.41 0 0 1-8.82 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiNetworkOutline;
