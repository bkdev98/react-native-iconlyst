import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSockOutline = ({
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
      d="M16.94 7.297a.75.75 0 0 1 .851.632l.748 5.077a5.03 5.03 0 0 1-.941 3.735l-2.753 3.444a5.26 5.26 0 0 1-8.47-6.237l1.336-1.602-.284-2.697a.75.75 0 0 1 1.492-.157l.317 3.013a.75.75 0 0 1-.17.558l-1.52 1.824a3.76 3.76 0 0 0 6.118 4.373l2.752-3.443a3.53 3.53 0 0 0 .639-2.592l-.748-5.077a.75.75 0 0 1 .633-.851"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.913 12.067a.75.75 0 0 1 1.058-.078c.337.29 1.299.87 2.284.84a.75.75 0 1 1 .047 1.499c-1.503.047-2.819-.78-3.31-1.203a.75.75 0 0 1-.079-1.058M7.405 5.725q-.001 0 .013-.015zm.503-.316q.203-.096.48-.2c.842-.31 2.06-.594 3.45-.764s2.642-.187 3.534-.089q.295.033.515.078-.203.095-.482.2c-.841.31-2.06.594-3.45.764s-2.64.187-3.532.088a6 6 0 0 1-.515-.077m8.542-.789q-.001 0-.016-.011.018.01.016.011m-.074-.487.013-.016zM7.36 5.234q-.018-.011-.016-.012.001 0 .016.012m.51-1.432c.98-.361 2.317-.666 3.787-.846s2.842-.205 3.879-.09c.512.056.986.15 1.358.303.305.124.851.413.927 1.029.075.616-.386 1.028-.652 1.222-.325.236-.761.443-1.245.62-.979.362-2.317.667-3.787.847s-2.842.205-3.879.09c-.512-.056-.986-.151-1.358-.303-.305-.124-.851-.413-.926-1.029s.385-1.028.651-1.222c.325-.237.762-.443 1.245-.621"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.936 3.458a.75.75 0 0 1 .866.613l.447 2.613c.146.852-.259 1.75-1.106 2.128-.962.43-2.648 1.073-4.576 1.309a14.5 14.5 0 0 1-4.649-.208c-.806-.17-1.354-.825-1.487-1.57l-.45-2.518a.75.75 0 1 1 1.477-.263l.45 2.517c.037.21.175.336.319.366.858.18 2.4.402 4.158.187 1.723-.21 3.257-.792 4.146-1.19.164-.073.281-.264.24-.505l-.448-2.613a.75.75 0 0 1 .613-.866"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSockOutline;