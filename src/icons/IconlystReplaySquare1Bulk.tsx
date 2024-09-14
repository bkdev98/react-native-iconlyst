import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare1Bulk = ({
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
      d="m17.745 15.072-1.66 1.657a.8.8 0 0 1-.247.165.8.8 0 0 1-.259.052c-.009 0-.017.005-.026.005h-.001a.8.8 0 0 1-.287-.059c-.064-.026-.116-.07-.17-.113-.023-.017-.051-.026-.073-.047l-1.662-1.66a.75.75 0 1 1 1.059-1.062l.384.383v-3.812c0-.4-.163-.794-.449-1.082a1.55 1.55 0 0 0-1.076-.438h-1.031a.75.75 0 0 1 0-1.5h1.031c.791 0 1.57.319 2.134.875.569.573.891 1.352.891 2.145v3.81l.382-.382a.751.751 0 0 1 1.06 1.063m-5.971 1.879h-1.03a3 3 0 0 1-2.142-.881 3.06 3.06 0 0 1-.884-2.14v-3.81l-.382.382a.75.75 0 0 1-1.061-.002.75.75 0 0 1 .001-1.06l1.66-1.656a.7.7 0 0 1 .248-.165c.073-.03.15-.04.228-.047.02-.001.036-.011.056-.011l.007.002q.145 0 .281.056c.065.028.119.072.174.116.022.017.049.025.069.045l1.663 1.66a.75.75 0 0 1-1.06 1.062l-.384-.384v3.813c0 .4.164.794.449 1.082.281.283.663.438 1.077.438h1.03a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplaySquare1Bulk;
