import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyChristmasBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M18.867 9.992c-.03.5-.13 1-.3 1.48a6.2 6.2 0 0 1-1.53 2.49l-7.37 7.37c-.52.52-1.2.78-1.89.78-.68 0-1.37-.26-1.89-.78a2.7 2.7 0 0 1-.58-2.92c.13-.32.33-.61.58-.87l7.37-7.37c.19-.18.28-.42.29-.67v-.06c0-.25-.1-.5-.29-.69-.2-.2-.47-.3-.73-.29-.05 0-.1.01-.15.02-.2.03-.39.12-.55.27a2.9 2.9 0 0 1-.71.51c-1 .49-2.24.32-3.07-.51a2.68 2.68 0 0 1 0-3.78 6.25 6.25 0 0 1 2.29-1.46c.48-.18.97-.3 1.47-.35 1.6-.19 3.25.23 4.59 1.26.22.16.44.35.64.55.16.16.31.32.45.49a6.3 6.3 0 0 1 1.38 4.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.118 9.262c.25-.13.5-.3.71-.51.16-.15.35-.24.55-.27.05-.01.1-.02.15-.02.26-.01.53.09.73.29.19.19.29.44.29.69l3.94-3.98c-.14-.17-.29-.33-.45-.49-.2-.2-.42-.39-.64-.55l-3.89 3.92-.7-5.18c-.5.05-.99.17-1.47.35l.78 5.73zM13.548 9.502c-.01.25-.1.49-.29.67l-.74.74 6.05.56c.17-.48.27-.98.3-1.48zM8.808 14.622c.02.01.05.02.08.02l6.81.66 1.34-1.34.04-.04-6.9-.67zM5.888 17.542c-.25.26-.45.55-.58.87l6.64.64 1.38-1.38-6.91-.66z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandyChristmasBulk;
