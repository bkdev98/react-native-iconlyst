import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare2Bulk = ({
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
      d="M15.977 2.75H8.033c-3.255 0-5.528 2.172-5.528 5.28v8.44c0 3.158 2.221 5.28 5.528 5.28h7.944c3.301 0 5.518-2.122 5.518-5.28V8.03c0-3.147-2.216-5.269-5.518-5.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.827 6.52 1.657 1.66a.8.8 0 0 1 .165.247.8.8 0 0 1 .052.26c0 .008.005.016.005.025v.001a.8.8 0 0 1-.058.287c-.026.064-.07.116-.113.17-.018.023-.026.051-.048.073l-1.66 1.662a.75.75 0 1 1-1.062-1.059l.384-.384h-3.813c-.4 0-.794.163-1.082.45a1.55 1.55 0 0 0-.438 1.075v1.031a.75.75 0 0 1-1.5 0v-1.03c0-.792.319-1.57.875-2.135a3.06 3.06 0 0 1 2.145-.89h3.81l-.381-.383a.751.751 0 0 1 1.062-1.06m1.879 5.971v1.03c0 .816-.313 1.577-.881 2.142a3.06 3.06 0 0 1-2.14.884h-3.81l.382.382a.75.75 0 0 1-.001 1.061.75.75 0 0 1-1.061 0l-1.656-1.66a.7.7 0 0 1-.165-.249.8.8 0 0 1-.047-.228c-.001-.02-.011-.036-.011-.056l.002-.007q0-.144.056-.28c.028-.066.072-.12.116-.175.017-.022.025-.049.045-.069l1.66-1.663a.75.75 0 0 1 1.062 1.06l-.383.384h3.812c.4 0 .794-.164 1.082-.449.283-.28.438-.663.438-1.077v-1.03a.75.75 0 0 1 1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplaySquare2Bulk;
