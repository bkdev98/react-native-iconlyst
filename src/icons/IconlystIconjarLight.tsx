import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconjarLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.928 11.203a1.18 1.18 0 0 1 1.182-1.148h3.535c.788 0 1.312.514 1.502 1.061.194.563.221 1.218.176 1.815-.056.708-.47 1.315-.645 1.992-.143.542-.107 1.087.239 1.548.299.398.769.644 1.265.679.799.055 1.548-.423 1.738-1.218.366-1.535-.968-2.86-.704-4.386.15-.866.922-1.491 1.801-1.491h.872c.64 0 1.163.509 1.182 1.148.01.372-.175.71-.444.969-.48.463-.424 1.168.064 1.624.7.654.912 1.45.756 2.392-.156.94-.384 1.867-.562 2.804A2.466 2.466 0 0 1 15.461 21H8.539a2.466 2.466 0 0 1-2.424-2.007c-.179-.937-.406-1.865-.561-2.804-.157-.942.055-1.738.756-2.392.487-.456.543-1.161.063-1.624-.269-.26-.454-.597-.444-.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.157 10.056c.632-.068 1.274-.497 1.119-1.304-.3-1.147-1.925-1.543-2.967-1.68a.468.468 0 0 1-.35-.702 2.2 2.2 0 0 0 .203-1.764 2.24 2.24 0 0 0-1.553-1.524 2.264 2.264 0 0 0-2.876 2.186c0 .402.11.777.3 1.102a.47.47 0 0 1-.342.707c-1.054.143-2.712.547-2.974 1.675-.156.807.486 1.236 1.119 1.304"
    />
  </Svg>
);
export default IconlystIconjarLight;
