import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySendingOutline = ({
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
      d="M9.722 3.13c-1.945-.34-3.441.472-4.223 1.992a.75.75 0 0 1-.667.407H2.253a.75.75 0 1 1 0-1.5h2.142C5.54 2.179 7.574 1.232 9.98 1.652h.002l6.96 1.237h.004l1.343.234c1.637.29 2.918 1.116 3.703 2.328.78 1.206 1.027 2.723.742 4.327l-1.383 7.838c-.28 1.604-1.032 2.946-2.18 3.812-1.155.87-2.642 1.207-4.28.917l-8.305-1.47h-.001c-2.545-.444-4.167-2.18-4.498-4.49a.75.75 0 1 1 1.484-.213c.238 1.653 1.35 2.89 3.272 3.225h.002l8.308 1.47c1.273.227 2.329-.044 3.115-.637.792-.598 1.379-1.574 1.605-2.872l1.384-7.842c.231-1.3.015-2.417-.524-3.25-.535-.824-1.43-1.44-2.705-1.666h-.001l-.179-.032-1.21 6.845a.75.75 0 0 1-1.093.53l-2.414-1.293-2.732.388a.75.75 0 0 1-.844-.874l1.218-6.848zm2.53.449-1.038 5.828 1.95-.277a.75.75 0 0 1 .46.081l1.718.922 1.03-5.822zM3.084 8.742a.75.75 0 0 1 .75-.75h3.32a.75.75 0 1 1 0 1.5h-3.32a.75.75 0 0 1-.75-.75M1.35 12.686a.75.75 0 0 1 .75-.75h3.579a.75.75 0 1 1 0 1.5h-3.58a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliverySendingOutline;
