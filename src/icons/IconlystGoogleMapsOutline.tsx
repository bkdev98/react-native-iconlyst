import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleMapsOutline = ({
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
      d="M12.031 7.805a1.759 1.759 0 1 0 0 3.517 1.759 1.759 0 0 0 0-3.517M8.772 9.563a3.259 3.259 0 1 1 6.518 0 3.259 3.259 0 0 1-6.518 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.2 5.998a.75.75 0 0 1 .105 1.055L9.782 17.471a.75.75 0 1 1-1.161-.95l8.524-10.418a.75.75 0 0 1 1.055-.105M14.47 2.747a.75.75 0 0 1 .091 1.056l-7.86 9.334a.75.75 0 0 1-1.147-.966l7.86-9.334a.75.75 0 0 1 1.057-.09"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.368 4.993a.75.75 0 0 1 1.056-.096l3.067 2.555a.75.75 0 1 1-.96 1.152L6.463 6.049a.75.75 0 0 1-.096-1.056"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.174 12.49c1.896-3.94-.832-8.752-5.178-8.74h-.003c-4.24-.006-6.997 4.66-5.238 8.548l.003.006c.316.714.788 1.406 1.318 2.092.244.317.495.624.745.931l.06.074c.264.325.528.65.767.969.188.237.379.461.568.684.705.83 1.382 1.627 1.791 2.897.513-1.604 1.444-2.646 2.397-3.712q.342-.38.679-.774l.003-.003c.79-.923 1.489-1.918 2.088-2.972m-5.18-10.24c5.6-.014 8.857 6.103 6.519 10.917l-.022.042a20.5 20.5 0 0 1-2.264 3.227c-.277.326-.537.619-.781.894-.965 1.087-1.673 1.884-2.066 3.263l-.01.035c-.073.215-.188.495-.405.723-.25.262-.58.399-.955.399-.284 0-.615-.066-.9-.332-.24-.224-.369-.524-.46-.78l-.016-.048c-.304-1.068-.774-1.626-1.475-2.457-.21-.248-.44-.52-.693-.839l-.013-.017a30 30 0 0 0-.798-1.005c-.247-.304-.51-.627-.766-.96-.555-.717-1.113-1.52-1.502-2.398C3.23 8.14 6.547 2.244 11.993 2.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleMapsOutline;
