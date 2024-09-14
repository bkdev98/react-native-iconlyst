import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCheckOutline = ({
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
      d="m7.884 4.018-.576.001c-1.217 0-2.151.43-2.784 1.11-.637.69-1.024 1.69-1.021 2.95l.017 7.58c.003 1.25.393 2.26 1.033 2.94.384.41.877.727 1.476.913.393.121.832.187 1.316.187l3.783-.02a.75.75 0 0 1 .008 1.5l-3.787.02c-1.593 0-2.942-.56-3.891-1.57-.943-1.01-1.434-2.4-1.438-3.97l-.017-7.58c-.004-1.56.483-2.96 1.422-3.97.944-1.02 2.29-1.59 3.88-1.59h1.327l5.347-.017a.7.7 0 0 1 .14 0l1.236-.003c1.593 0 2.943.56 3.891 1.57.944 1.01 1.435 2.4 1.438 3.96l.018 4.39c.001.42-.333.75-.747.75a.74.74 0 0 1-.753-.74l-.018-4.39c-.003-1.25-.393-2.26-1.033-2.94-.634-.68-1.57-1.1-2.792-1.1L14.805 4l.014 5.62a.76.76 0 0 1-.31.609.77.77 0 0 1-.673.11l-2.471-.813-2.49.823a.74.74 0 0 1-.674-.1.76.76 0 0 1-.31-.61zm5.42-.014-3.92.01.005 4.59 1.739-.575a.74.74 0 0 1 .467 0l1.721.56z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.857 17.839c.293-.3.768-.3 1.061 0l1.55 1.55 3.754-3.76a.749.749 0 1 1 1.06 1.06l-4.284 4.29a.755.755 0 0 1-.916.113.8.8 0 0 1-.145-.113l-2.081-2.08a.75.75 0 0 1 .001-1.06"
    />
  </Svg>
);
export default IconlystDeliveryCheckOutline;
