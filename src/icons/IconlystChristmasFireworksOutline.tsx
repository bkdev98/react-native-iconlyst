import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasFireworksOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.605 9.411a.75.75 0 0 1 0 1.061l-11.14 11.14a.75.75 0 0 1-1.06-1.06l11.139-11.14a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.589 2.703a1.247 1.247 0 0 1 1.337 1.336l-.45 6.036c-.038.51-.356.907-.802 1.061a1.37 1.37 0 0 1-1.214-.181c-2.296-1.556-4.198-3.63-5.77-5.763l-.02-.028c-.233-.35-.341-.805-.18-1.239.171-.46.59-.738 1.063-.773zm-.181 1.517-5.279.393c1.39 1.84 3.007 3.57 4.885 4.9z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.249 5.076a.75.75 0 0 1 0 1.06l-6.47 6.47a.273.273 0 0 0 0 .386l3.552 3.553a.75.75 0 0 1-1.06 1.061l-3.554-3.553a1.773 1.773 0 0 1 0-2.507l6.47-6.47a.75.75 0 0 1 1.062 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.128 8.465a.75.75 0 0 1 .75-.75h3.232a.75.75 0 1 1 0 1.5h-3.232a.75.75 0 0 1-.75-.75M7.661 11.923a.75.75 0 0 1 .75-.75h5.184a.75.75 0 0 1 0 1.5H8.41a.75.75 0 0 1-.75-.75M8.766 13.702a.75.75 0 0 1 .982.402c.167.4.294 1.188-.226 1.86-.53.688-1.517.973-2.932.86-1.232-.1-1.935.089-2.353.311-.411.219-.63.512-.828.82a.75.75 0 0 1-1.261-.812c.245-.382.635-.933 1.384-1.332.743-.395 1.754-.598 3.178-.483 1.24.1 1.563-.2 1.625-.28.073-.095.074-.256.03-.364a.75.75 0 0 1 .401-.982M4.638 11.759a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasFireworksOutline;
