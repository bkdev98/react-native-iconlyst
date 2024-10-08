import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicWandOutline = ({
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
      d="M10.293 10.572a2.264 2.264 0 0 1 3.38 3.012l-.004.005-6.715 7.405a2.264 2.264 0 0 1-3.38-3.013l.005-.005zm2.197.937a.764.764 0 0 0-1.079.063l-.004.005-6.714 7.404a.764.764 0 0 0 1.143 1.013l.004-.005 6.715-7.404a.764.764 0 0 0-.065-1.076M16.14 9.562a.75.75 0 0 1-.703-.49l-.113-.306a3.46 3.46 0 0 0-2.041-2.044l-.305-.113a.75.75 0 0 1 0-1.406l.305-.114a3.46 3.46 0 0 0 2.04-2.043l.114-.306a.75.75 0 0 1 1.406 0l.113.306a3.46 3.46 0 0 0 2.041 2.043l.305.114a.75.75 0 0 1 0 1.406l-.305.113a3.46 3.46 0 0 0-2.04 2.044l-.114.306a.75.75 0 0 1-.703.49m1.212-3.656a5 5 0 0 1-1.212-1.213c-.33.472-.74.882-1.212 1.213.471.33.882.741 1.212 1.213.33-.472.74-.882 1.212-1.213M8.328 9.073a.75.75 0 0 1-.717-.531 1.47 1.47 0 0 0-.979-.98.75.75 0 0 1 0-1.436c.469-.143.836-.51.979-.98a.75.75 0 0 1 1.435 0c.143.47.51.838.979.98a.75.75 0 0 1 0 1.435c-.469.143-.836.51-.98.98a.75.75 0 0 1-.717.532m.049-2.23-.049-.048-.048.049.048.048zM19.042 14.99a.75.75 0 0 1-.718-.532 1.07 1.07 0 0 0-.708-.71.75.75 0 0 1 0-1.434c.339-.104.605-.37.708-.71a.75.75 0 0 1 1.435 0c.104.34.37.606.709.71a.75.75 0 0 1 0 1.435c-.34.103-.605.369-.709.71a.75.75 0 0 1-.717.531"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.975 12.101a.75.75 0 0 1 1.059-.062l2.205 1.963a.75.75 0 0 1-.997 1.12L9.037 13.16a.75.75 0 0 1-.062-1.059M16.547 17.353a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1 0-1.5h.01a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagicWandOutline;
