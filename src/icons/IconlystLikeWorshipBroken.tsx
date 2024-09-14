import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikeWorshipBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.725 16.255c.673-.484.973-1.192 1.204-1.945.156-.507.2-3.393.211-4.49a1.382 1.382 0 0 1 2.765-.01c.022 1.133.099 2.374.061 3.596M21.508 16.441c-.575 1.759-1.736 3.292-3.321 4.258"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.57 20.795c-.01-1.214.029-4.114.202-5.058.29-1.589 1.83-3.724 4.304-3.021M12.928 9.643s-2.753-1.286-3.366-3.252c-.398-1.24.068-2.66 1.367-3.082a2.24 2.24 0 0 1 1.04-.07c.347.059.676.298.96.508.282-.212.611-.452.958-.51.348-.06.705-.035 1.042.072 1.299.419 1.76 1.842 1.363 3.082-.247.751-.787 1.4-1.363 1.914M8.228 16.255c-.673-.484-.973-1.192-1.204-1.945-.156-.507-.2-3.393-.211-4.49a1.382 1.382 0 0 0-2.765-.01c-.024 1.21-.11 2.543-.052 3.844M4.446 16.441C5.02 18.2 6.18 19.733 7.766 20.7"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.383 20.795c.01-1.214-.029-4.114-.202-5.058-.289-1.589-1.83-3.724-4.304-3.021"
    />
  </Svg>
);
export default IconlystLikeWorshipBroken;
