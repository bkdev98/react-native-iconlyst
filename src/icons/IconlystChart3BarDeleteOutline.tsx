import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart3BarDeleteOutline = ({
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
      d="M12.034 7.306a.75.75 0 0 1 .75.75v9.128a.75.75 0 0 1-1.5 0V8.056a.75.75 0 0 1 .75-.75m-4.2 2.954a.75.75 0 0 1 .75.75v6.174a.75.75 0 0 1-1.5 0V11.01a.75.75 0 0 1 .75-.75m8.331 3.263a.75.75 0 0 1 .75.75v2.91a.75.75 0 0 1-1.5 0v-2.91a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 4.516c.985-1.057 2.388-1.648 4.043-1.648h4.435a.75.75 0 1 1 0 1.5H7.783c-1.284 0-2.273.45-2.945 1.17-.678.727-1.088 1.79-1.088 3.108v7.946c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107v-3.946a.75.75 0 0 1 1.5 0v3.946c0 1.628-.508 3.078-1.487 4.129-.984 1.057-2.387 1.647-4.046 1.647H7.783c-1.66 0-3.062-.59-4.046-1.647-.978-1.05-1.487-2.501-1.487-4.13V8.647c0-1.63.511-3.08 1.49-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.53 2.088a.75.75 0 0 1 0 1.06l-1.718 1.719 1.72 1.72a.75.75 0 1 1-1.06 1.061l-1.72-1.72-1.722 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.721-1.718-1.719a.75.75 0 1 1 1.06-1.06l1.72 1.718 1.718-1.718a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChart3BarDeleteOutline;
