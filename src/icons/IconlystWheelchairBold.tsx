import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelchairBold = ({
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
      d="M12.237 7.07c1.22 0 2.21-1 2.21-2.22 0-1.21-.99-2.21-2.21-2.21s-2.21 1-2.21 2.21c0 1.22.99 2.22 2.21 2.22M10.587 19.86a3.418 3.418 0 0 1-2.33-5.92c.01-.01.01-.02.02-.02.6-.55 1.4-.89 2.27-.9h.04a3.4 3.4 0 0 1 3.36 2.83c.04.19.06.39.06.59 0 1.89-1.53 3.42-3.42 3.42m9.27-1.96c-.25-.78-1.01-2.53-1.26-3.3-.29-.85-.59-1.08-1.47-1.09-.59 0-1.18.01-1.77 0-.46-.01-.7.03-.84-.02-.05-.07-.1-.14-.16-.21-.04-.16-.06-.41-.09-.82 0-.02.01-.04.05-.18.49 0 .97.01 1.45 0 .83-.03 1.35-.49 1.33-1.19-.01-.67-.52-1.12-1.32-1.14-.42-.01-.85-.03-1.28.01-.41.03-.56-.14-.61-.53-.1-.64-.63-1.13-1.27-1.15-.32-.01-1.01 0-1.33 0-.81.01-1.42.67-1.35 1.48.06.59.17 1.19.29 1.78-.73.05-1.41.26-2.01.59l-.72-2.93a.74.74 0 0 0-.72-.57h-1.94a.749.749 0 1 0 0 1.5h1.35l.74 3.03c-.79.87-1.26 2.03-1.26 3.28a4.93 4.93 0 0 0 4.92 4.92 4.93 4.93 0 0 0 4.92-4.92c0-.2-.01-.4-.04-.6.17 0 .33 0 .5-.01.42-.01.66.1.78.55.12.42.75 1.82.89 2.24.21.64.91.96 1.53.72.58-.23.88-.86.69-1.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWheelchairBold;
