import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileHashtagBold = ({
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
      d="M15.224 12.704h-.733l-.164 1.294h.65a.75.75 0 0 1 0 1.5h-.84l-.1.784a.749.749 0 1 1-1.488-.188l.075-.596h-1.325l-.1.784a.753.753 0 0 1-.838.651.75.75 0 0 1-.65-.839l.076-.596h-.562a.75.75 0 0 1 0-1.5h.752l.164-1.294h-.67a.75.75 0 0 1 0-1.5h.859l.1-.785a.75.75 0 0 1 1.488.189l-.075.596h1.325l.1-.785a.75.75 0 0 1 1.488.189l-.075.596h.543a.75.75 0 0 1 0 1.5m1.396-7.34h-2.653a1.67 1.67 0 0 1-1.313-.656l-.856-1.14a2.65 2.65 0 0 0-2.11-1.055H7.813c-3.424 0-5.088 1.906-5.088 5.828v7.312c0 3.653 2.185 5.833 5.845 5.833h7.297c3.65 0 5.832-2.18 5.832-5.83l.026-4.659c0-3.844-1.622-5.634-5.105-5.634"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.488 13.998h1.326l.164-1.294h-1.326z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileHashtagBold;
