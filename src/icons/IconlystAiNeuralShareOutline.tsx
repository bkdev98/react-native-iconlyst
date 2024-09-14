import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralShareOutline = ({
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
      d="M19.79 10.41c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05m0-2.59c-.3 0-.55.25-.55.55s.25.55.55.55.55-.25.55-.55-.25-.55-.55-.55M14.32 6.78c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05m0-2.59c-.3 0-.55.25-.55.55s.25.55.55.55.55-.25.55-.55-.25-.55-.55-.55M8.23 8.02c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05m0-2.59c-.3 0-.55.25-.55.55s.25.55.55.55.55-.25.55-.55-.25-.55-.55-.55M4.39 11.69c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05m0-2.59c-.3 0-.55.25-.55.55s.25.55.55.55.55-.25.55-.55-.25-.55-.55-.55"
    />
    <Path
      fill={props.color}
      d="M10.29 11.17c-.41 0-.75-.34-.75-.75V8.87l-1.18-1.3a.755.755 0 0 1 .05-1.06c.31-.28.78-.25 1.06.05l1.37 1.51c.12.14.19.32.19.5v1.84c0 .41-.34.75-.75.75zM14.32 10.601c-.41 0-.75-.34-.75-.75v-3.82c0-.41.34-.75.75-.75s.75.34.75.75v3.82c0 .41-.34.75-.75.75M17.39 12.061c-.18 0-.36-.07-.51-.2a.755.755 0 0 1-.04-1.06l1.71-1.85c.28-.3.76-.32 1.06-.04s.32.76.04 1.06l-1.71 1.85c-.15.16-.35.24-.55.24M12.15 21.28c-1.41 0-2.79-.27-4.22-.56-1-.2-2.93-.2-3.66-.2-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.31 0 2.93.02 3.89.21 2.47.49 4.55.9 6.78.04 1.53-.6 2.57-1.64 3.77-2.85l.18-.18c.31-.31.31-.82 0-1.14a.79.79 0 0 0-1.04-.07c-.24.18-.47.37-.71.57-1.04.86-2.22 1.83-3.75 1.86-.27 0-.53 0-.8-.01-.41-.02-.79-.03-1.15.02a.747.747 0 0 1-.85-.63c-.06-.41.22-.79.63-.85.5-.07.97-.05 1.43-.04.24 0 .48.02.71.01 1-.02 1.93-.79 2.83-1.52.26-.21.51-.42.76-.61.91-.69 2.2-.59 3 .21.89.9.89 2.36 0 3.25l-.18.18c-1.27 1.27-2.46 2.48-4.29 3.19-1.14.44-2.24.61-3.32.61z"
    />
    <Path
      fill={props.color}
      d="M12.66 17.451h-1.34c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.34c.56 0 .97-.37.97-.89 0-.43-.29-.78-.74-.89-.98-.25-2.03-.48-3.15-.44-1.71.04-3.79 1.05-5.06 1.9-.34.23-.81.14-1.04-.21a.746.746 0 0 1 .21-1.04c1.5-1.01 3.83-2.1 5.86-2.15 1.28-.03 2.46.22 3.55.49 1.12.28 1.87 1.22 1.87 2.35 0 1.34-1.09 2.39-2.47 2.39z"
    />
  </Svg>
);
export default IconlystAiNeuralShareOutline;
